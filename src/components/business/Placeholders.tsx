import { Building2, Plus } from "lucide-react";
import { Button } from "../common/Button";

export const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-96 text-slate-400 border-2 border-dashed border-slate-300 rounded-xl">
    <Building2 className="w-12 h-12 mb-4 opacity-50" />
    <h3 className="text-lg font-medium text-slate-600">{title} Module</h3>
    <p>Waiting for implementation in next phase.</p>
    <Button variant="outline" className="mt-4" size="sm">
      <Plus className="w-4 h-4 mr-2" /> Initialize Module
    </Button>
  </div>
);