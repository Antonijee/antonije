import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

type TCompany = {
    name: string,
    position: string
    description: string,
    image?: string
}

const Company = ({name, position, description, image}: TCompany) => {
  const navigate = useNavigate();
  const prefix = '/antonije/';
  const companySlug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <>
      {/* Image Section - Upper Half */}
      {image && (
        <div 
          className="w-full h-48 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        </div>
      )}

      <div className="p-6 bg-white flex flex-col min-h-[240px]">
        <h2 className="text-2xl font-bold text-blue-900 mb-2 leading-tight">
          {name}
        </h2>
        <p className="text-sm text-blue-700 mb-4 font-medium">
          {position}
        </p>
        <p className="text-sm text-blue-800 leading-relaxed mb-6">
          {description.length > 100 ? `${description.substring(0, 100)} [...]` : description}
        </p>
        <Button 
          variant="outline" 
          className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 hover:text-blue-900 mt-auto cursor-pointer"
          onClick={() => navigate(`${prefix}company/${companySlug}`)}
        >
            View Details
        </Button>
      </div>
    </>
  )
}

export default Company