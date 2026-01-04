// Storage interface for Dermiciq Technologies
// Using Replit Auth integration for user management
// Contact form submissions are handled directly via Formspree

export interface IStorage {
  // Placeholder for future storage needs
  // User storage is handled by the auth integration
}

export class DatabaseStorage implements IStorage {
  // Placeholder for future storage needs
  // User CRUD operations are handled by server/replit_integrations/auth/storage.ts
}

export const storage = new DatabaseStorage();
