import { create } from 'zustand';
import { DocumentState, Resume } from '../types';

const initialResumes: Resume[] = [
  {
    id: 'sql-dev',
    title: 'SQL Developer Resume',
    description: 'Specialized in database development, SQL optimization, and data modeling',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1uLvHlNIcuRg-_whl_1y9Kr0xTEGXRKKq',
    viewUrl: 'https://drive.google.com/file/d/1uLvHlNIcuRg-_whl_1y9Kr0xTEGXRKKq/view'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst Resume',
    description: 'Focused on data analysis, visualization, and business intelligence',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1BxbACw4yImucfWl9vImtnzOg1w9yc2bf',
    viewUrl: 'https://drive.google.com/file/d/1BxbACw4yImucfWl9vImtnzOg1w9yc2bf/view'
  }
];

const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],
  selectedProfilePicture: null,
  resumes: initialResumes,
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  removeDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
    })),
  setProfilePicture: (url) => set({ selectedProfilePicture: url }),
  addResume: (resume) =>
    set((state) => ({ resumes: [...state.resumes, resume] })),
  removeResume: (id) =>
    set((state) => ({
      resumes: state.resumes.filter((resume) => resume.id !== id),
    })),
}));

export default useDocumentStore;