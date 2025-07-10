import React from "react";
import PlatformAdminNavigation from "../components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  Users,
  BookOpen,
  Building2,
  Activity,
} from "lucide-react";

const PlatformAdminAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PlatformAdminNavigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm h-24">
          <div className="h-full px-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Platform Analytics
              </h1>
              <p className="text-gray-600">
                Comprehensive insights and performance metrics
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 Days
              </Button>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Total Revenue
                  </p>
                  <p className="text-3xl font-bold text-gray-900">$2.4M</p>
                  <p className="text-sm text-green-600">
                    ↑ 12.5% vs last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Active Schools
                  </p>
                  <p className="text-3xl font-bold text-gray-900">247</p>
                  <p className="text-sm text-blue-600">↑ 8 new this month</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Platform Users
                  </p>
                  <p className="text-3xl font-bold text-gray-900">15.2K</p>
                  <p className="text-sm text-purple-600">↑ 1.2K this month</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Course Completion
                  </p>
                  <p className="text-3xl font-bold text-gray-900">89.2%</p>
                  <p className="text-sm text-orange-600">↑ 3.1% improvement</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Revenue Growth
                </h3>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-center">
                <p className="text-gray-500 mb-8">
                  Chart visualization placeholder
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  User Engagement
                </h3>
                <Activity className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-lg flex items-end justify-center">
                <p className="text-gray-500 mb-8">
                  Chart visualization placeholder
                </p>
              </div>
            </Card>
          </div>

          {/* Additional Analytics */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Detailed Analytics
            </h3>
            <div className="text-center py-12">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-2">
                Advanced Analytics Coming Soon
              </p>
              <p className="text-gray-400 text-sm">
                Comprehensive reporting and visualization tools are in
                development
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default PlatformAdminAnalytics;
