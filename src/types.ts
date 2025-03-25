export interface Document {
  id: string;
  name: string;
  url: string;
  type: string;
  uploadDate: string;
}

export interface Resume {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  viewUrl: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export interface DocumentState {
  documents: Document[];
  selectedProfilePicture: string | null;
  resumes: Resume[];
  addDocument: (document: Document) => void;
  removeDocument: (id: string) => void;
  setProfilePicture: (url: string) => void;
  addResume: (resume: Resume) => void;
  removeResume: (id: string) => void;
}