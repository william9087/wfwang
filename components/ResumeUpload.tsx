
import React, { useState } from 'react';
import { extractResumeData } from '../services/geminiService';

interface ResumeUploadProps {
  onDataExtracted: (data: any) => void;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ onDataExtracted }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    const validTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or image (PNG/JPEG) of your resume.');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const extractedData = await extractResumeData(base64, file.type);
        onDataExtracted(extractedData);
        setIsUploading(false);
      };
      reader.onerror = () => {
        setError('Failed to read file.');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError('AI extraction failed. Please try again.');
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 glass rounded-2xl border-dashed border-2 border-blue-500/30 hover:border-blue-500 transition-all">
      <div className="text-center">
        <h3 className="text-lg font-bold text-white mb-2">Populate Portfolio with AI</h3>
        <p className="text-sm text-gray-400 mb-4">Upload your resume (PDF/Image) to instantly update this site.</p>
      </div>

      <label className={`relative cursor-pointer group`}>
        <div className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
          isUploading 
            ? 'bg-blue-600/50 cursor-not-allowed text-white/50' 
            : 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-105'
        }`}>
          {isUploading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Analyzing with Gemini...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Upload Resume</span>
            </>
          )}
        </div>
        <input 
          type="file" 
          className="hidden" 
          onChange={handleFileChange} 
          disabled={isUploading}
          accept=".pdf,.png,.jpg,.jpeg"
        />
      </label>

      {error && (
        <p className="text-xs text-red-400 mt-2 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
          {error}
        </p>
      )}
    </div>
  );
};

export default ResumeUpload;
