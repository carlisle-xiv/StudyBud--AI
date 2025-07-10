import { cn } from '@/lib/utils'
import { Role } from '@/Types/Types'
import { GraduationCap, Shield, Users } from 'lucide-react'
import React from 'react'

export type RoleCardProps = {
    role: Role;
    onClick: () => void;
    isSelected: boolean;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, onClick, isSelected }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={cn(`p-6 rounded-lg border-2 transition-all duration-200 border-gray-200 hover:border-gray-300`,
                isSelected && role.role === "Student" && "border-blue-600 bg-blue-50",
                isSelected && role.role === "Admin" && "border-purple-600 bg-purple-50",
                isSelected && role.role === "Teacher" && "border-cyan-600 bg-cyan-50"
            )}
        >
            {role.role === "Student" && <GraduationCap className="h-6 w-6 mx-auto mb-3 text-blue-600" />}
            {role.role === "Teacher" && <Users className="h-6 w-6 mx-auto mb-3 text-cyan-600" />}
            {role.role === "Admin" && <Shield className="h-6 w-6 mx-auto mb-3 text-purple-600" />}
            <div className="text-sm font-medium text-gray-700">
                {role.role}
            </div>
        </button>
    )
}

export default RoleCard