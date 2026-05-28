export default function Footer() {
  return (
    <footer className="bg-gray-50 border border-gray-200 rounded-md">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-md p-4 bg-white">
            <h2 className="text-gray-900 font-semibold">UrbanX</h2>
            <p className="text-gray-600 mt-2">
              Multi-service solutions across catering, housekeeping,
              constructions, and furniture.
            </p>
          </div>
          <div className="border border-gray-200 rounded-md p-4 bg-white">
            <h2 className="text-gray-900 font-semibold">Contact</h2>
            <p className="text-gray-600 mt-2">
              All rights reserved. Built with a grayscale wireframe aesthetic.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
