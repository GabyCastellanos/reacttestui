# AI Observability Assistant Frontend

A modern React application for querying observability data using natural language. Built for hackathons and rapid prototyping with flexible backend integration.

## 🚀 Features

- **Natural Language Queries**: Ask questions about your data in plain English
- **Multiple Data Sources**: Support for various tables/data sources
- **Real-time Insights**: Get AI-powered analysis with technical details
- **Flexible Backend**: Easy to connect to any backend API
- **Beautiful UI**: Modern, responsive design with Tailwind CSS
- **TypeScript**: Type-safe development experience

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for navigation
- **State Management**: React Context for authentication
- **API Layer**: Abstracted service layer for easy backend integration

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd reacttestui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Login

Use any email and password to login (mock authentication for demo purposes).

## 🔧 Backend Integration

The frontend is designed to be backend-agnostic. To connect to your actual backend:

1. Update the `ApiService` class in `src/services/api.ts`
2. Replace mock implementations with real API calls
3. Update environment variables in `.env` file

### API Endpoints Expected

```typescript
// Authentication
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password"
}

// Get available tables
GET /api/tables

// Submit natural language query
POST /api/query
{
  "table": "table_name",
  "query": "natural language query"
}
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_API_URL=http://localhost:3001/api
```

## 🎨 Customization

### Styling

The app uses Tailwind CSS with a custom design system. Main colors and styles are defined in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and custom components

### Adding New Components

1. Create component in `src/components/`
2. Follow TypeScript patterns established in existing components
3. Use the design system classes for consistency

### Data Source Configuration

Update the `mockTables` array in `src/components/TableSelector.tsx` to match your data sources.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🛠️ Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Security Notes

- Current implementation uses mock authentication for demo purposes
- Replace with proper JWT or session-based authentication for production
- Implement proper input validation and sanitization
- Use HTTPS in production
- Consider implementing rate limiting for API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Hackathon Tips

### Quick Customization

1. **Branding**: Update logo and colors in `tailwind.config.js`
2. **Data Sources**: Modify `TableSelector.tsx` with your actual tables
3. **Backend**: Replace mock API calls in `api.ts` with your endpoints
4. **Styling**: Use Tailwind utility classes for rapid UI changes

### Demo Features

- Works completely offline with mock data
- Realistic query responses and SQL generation
- Professional UI suitable for presentations
- Easy to extend with additional features

### Performance

- Vite for fast development and building
- Code splitting with React Router
- Optimized bundle size with Tailwind CSS purging
- Lazy loading ready for large datasets

## 🌟 Showcase Features

Perfect for demonstrating:
- AI-powered natural language processing
- Modern React development practices
- Responsive design principles
- Real-time data visualization
- Professional UI/UX design
