import React from 'react';
import { Search, ExternalLink } from 'lucide-react';

interface Project {
  projectName: string;
  status: 'EB' | string;
  reference: string;
  dataCollection: string;
  phase: 'Completed' | string;
  description: string;
  creationDate: string;
}

const ProjectTable: React.FC = () => {
  const projects: Project[] = [
    {
      projectName: 'Apparel',
      status: 'EB',
      reference: 'Apparel',
      dataCollection: 'Data Collection form EC',
      phase: 'Completed',
      description: 'Lorem ipsum',
      creationDate: 'Oct 25, 2023'
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {/* Header Navigation */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span>Traceability</span>
        <span>•</span>
        <span>Data Collection</span>
        <span>•</span>
        <span className="font-semibold">Projects</span>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md pl-10 pr-4 py-2 border rounded-md"
        />
      </div>

      {/* Main Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Headers */}
          <thead>
            <tr className="bg-gray-50 border-b">
              <th colSpan={2} className="text-left p-4 font-semibold">Project description</th>
              <th colSpan={2} className="text-left p-4 font-semibold">Data record</th>
              <th className="text-left p-4 font-semibold">Creation date</th>
              <th className="w-16"></th>
            </tr>
            <tr className="bg-gray-50 border-b text-sm text-gray-600">
              <th className="text-left p-4">Project name</th>
              <th className="text-left p-4">Reference type</th>
              <th className="text-left p-4">Phase</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4"></th>
              <th className="w-16"></th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{project.projectName}</td>
                <td className="p-4">
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {project.status}
                  </span>
                </td>
                <td className="p-4 text-blue-600">{project.dataCollection}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {project.phase}
                  </span>
                </td>
                <td className="p-4">{project.creationDate}</td>
                <td className="p-4 text-center">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Table Footer */}
        <div className="p-4 bg-gray-50 text-sm text-gray-600">
          407 articles • 1.0 version
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;