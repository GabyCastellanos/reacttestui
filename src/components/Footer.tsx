import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-12">
      <div className="container mx-auto px-6">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by the Queryous Minds team
          </p>
      </div>
    </footer>
  );
}
