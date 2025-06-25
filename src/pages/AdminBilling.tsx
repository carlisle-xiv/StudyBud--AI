import React from "react";
import AdminNavigation from "@/components/AdminNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Download, Bell, CreditCard, ChevronDown } from "lucide-react";

const AdminBilling = () => {
  const billingHistory = [
    {
      invoice: "#INV-2024-001",
      date: "Feb 15, 2024",
      description: "Enterprise Plan - Monthly",
      amount: "$299.00",
      status: "Paid",
    },
    {
      invoice: "#INV-2024-002",
      date: "Jan 15, 2024",
      description: "Enterprise Plan - Monthly",
      amount: "$299.00",
      status: "Paid",
    },
    {
      invoice: "#INV-2023-045",
      date: "Dec 15, 2023",
      description: "Enterprise Plan - Monthly",
      amount: "$299.00",
      status: "Paid",
    },
    {
      invoice: "#INV-2023-044",
      date: "Nov 15, 2023",
      description: "Enterprise Plan - Monthly + AI Credits",
      amount: "$449.00",
      status: "Paid",
    },
    {
      invoice: "#INV-2023-043",
      date: "Oct 15, 2023",
      description: "Enterprise Plan - Monthly",
      amount: "$299.00",
      status: "Paid",
    },
    {
      invoice: "#INV-2023-042",
      date: "Sep 15, 2023",
      description: "Enterprise Plan - Monthly",
      amount: "$299.00",
      status: "Paid",
    },
  ];

  const upcomingBills = [
    {
      title: "Enterprise Plan Renewal",
      description: "Annual subscription renewal",
      amount: "$2,999.00",
      dueDate: "Due: March 15, 2024",
    },
    {
      title: "Additional AI Credits",
      description: "Extra usage beyond plan limits",
      amount: "$249.00",
      dueDate: "Due: March 1, 2024",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Billing & Payments
              </h1>
              <p className="text-gray-600 mt-1">
                Manage subscription, invoices and payment methods
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="w-4 h-4 mr-2" />
                Download Invoice
              </Button>
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-500" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0798b0d3156b0028038a3b9b3aa3319ee3785e64"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-8">
            {/* Current Plan & Next Billing */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Current Plan */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Current Plan
                      </h3>
                      <p className="text-gray-600">
                        Enterprise Plan - Annual Billing
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                      Active
                    </span>
                  </div>

                  {/* Plan Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        5,000
                      </div>
                      <div className="text-sm text-gray-600">
                        Active Students
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        Unlimited
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        250
                      </div>
                      <div className="text-sm text-gray-600">Teachers</div>
                      <div className="text-xs text-green-600 mt-1">
                        Unlimited
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        1,847
                      </div>
                      <div className="text-sm text-gray-600">
                        Courses Created
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        Unlimited
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        $2,999
                      </div>
                      <div className="text-gray-600">per year</div>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline">Change Plan</Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Next Billing */}
              <div>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Next Billing
                  </h3>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">
                      $2,999
                    </div>
                    <div className="text-gray-600">Due March 15, 2024</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enterprise Plan</span>
                      <span className="font-medium">$2,999.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">AI Usage Credits</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold">$2,999.00</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Pay Now
                  </Button>
                </Card>
              </div>
            </div>

            {/* Payment Method */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment Method
                </h3>
                <Button variant="outline">Update</Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    •••• •••• •••• 4242
                  </div>
                  <div className="text-sm text-gray-600">Expires 12/25</div>
                </div>
                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">
                  Primary
                </span>
              </div>
            </Card>

            {/* Upcoming Bills */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Upcoming Bills
              </h3>

              <div className="space-y-4">
                {upcomingBills.map((bill, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-medium text-gray-900">
                        {bill.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {bill.description}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        {bill.amount}
                      </div>
                      <div className="text-sm text-gray-600">
                        {bill.dueDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Billing History */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Billing History
                </h3>
                <div className="flex items-center space-x-4">
                  <Select defaultValue="last-12-months">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-12-months">
                        Last 12 months
                      </SelectItem>
                      <SelectItem value="last-6-months">
                        Last 6 months
                      </SelectItem>
                      <SelectItem value="last-3-months">
                        Last 3 months
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">Export</Button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Invoice
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Description
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingHistory.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4">
                          <span className="text-blue-600 font-medium">
                            {item.invoice}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-900">{item.date}</td>
                        <td className="py-4 px-4 text-gray-900">
                          {item.description}
                        </td>
                        <td className="py-4 px-4 text-gray-900">
                          {item.amount}
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Link
                            to={`/download-invoice/${item.invoice.replace("#", "")}`}
                            className="text-blue-600 text-sm hover:text-blue-700"
                          >
                            Download
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-gray-600">
                  Showing 6 of 24 invoices
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Next
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminBilling;
