import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminNavigation from "@/components/AdminNavigation";
import {
  ArrowLeft,
  Download,
  Printer,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DownloadInvoice = () => {
  const navigate = useNavigate();
  const { invoiceId } = useParams();

  // Mock invoice data - in real app this would come from API
  const invoiceData = {
    invoiceNumber: "INV-2024-001",
    issueDate: "February 15, 2024",
    dueDate: "March 15, 2024",
    paymentTerms: "Net 30",
    description: "Enterprise Plan - Monthly Subscription",
    period: "February 15 - March 14, 2024",
    amount: 299.0,
    status: "Paid",
    transactionId: "txn_1234567890",
    chargedDate: "February 15, 2024",
    customer: {
      name: "Springfield University",
      department: "Finance Department",
      address: "742 Evergreen Terrace",
      city: "Springfield, IL 62701",
      country: "United States",
      email: "billing@springfield.edu",
    },
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // In real app, this would generate and download PDF
    console.log("Downloading PDF for invoice:", invoiceId);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Invoice #{invoiceData.invoiceNumber}
              </h1>
              <p className="text-gray-600">Download and print your invoice</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={handlePrint}
                className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button
                onClick={handleDownloadPDF}
                className="bg-green-600 hover:bg-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/admin-billing")}
                className="text-gray-700 border-gray-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Billing
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-sm">
              {/* Invoice Header */}
              <div className="flex justify-between items-start pb-8 border-b border-gray-200 mb-8">
                {/* Company Info */}
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      StudyBud
                    </h2>
                    <p className="text-gray-600">
                      Educational Technology Platform
                    </p>
                    <div className="mt-4 text-sm text-gray-600 space-y-1">
                      <p>123 Education Street</p>
                      <p>Tech Valley, CA 94105</p>
                      <p>United States</p>
                      <p>support@studybuddy.ai</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                {/* Invoice Details */}
                <div className="text-right">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    INVOICE
                  </h2>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium">Invoice #:</span>{" "}
                      {invoiceData.invoiceNumber}
                    </p>
                    <p>
                      <span className="font-medium">Issue Date:</span>{" "}
                      {invoiceData.issueDate}
                    </p>
                    <p>
                      <span className="font-medium">Due Date:</span>{" "}
                      {invoiceData.dueDate}
                    </p>
                    <p>
                      <span className="font-medium">Payment Terms:</span>{" "}
                      {invoiceData.paymentTerms}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bill To Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Bill To:
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900">
                    {invoiceData.customer.name}
                  </p>
                  <p className="text-gray-600">
                    {invoiceData.customer.department}
                  </p>
                  <p className="text-gray-600">
                    {invoiceData.customer.address}
                  </p>
                  <p className="text-gray-600">{invoiceData.customer.city}</p>
                  <p className="text-gray-600">
                    {invoiceData.customer.country}
                  </p>
                  <p className="text-gray-600">{invoiceData.customer.email}</p>
                </div>
              </div>

              {/* Invoice Items Table */}
              <div className="mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 font-semibold text-gray-900">
                        Description
                      </th>
                      <th className="text-center py-3 font-semibold text-gray-900">
                        Quantity
                      </th>
                      <th className="text-right py-3 font-semibold text-gray-900">
                        Unit Price
                      </th>
                      <th className="text-right py-3 font-semibold text-gray-900">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-6">
                        <div>
                          <p className="font-medium text-gray-900">
                            {invoiceData.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            Unlimited students, teachers, and courses
                          </p>
                          <p className="text-sm text-gray-600">
                            Period: {invoiceData.period}
                          </p>
                        </div>
                      </td>
                      <td className="text-center py-6">1</td>
                      <td className="text-right py-6">
                        ${invoiceData.amount.toFixed(2)}
                      </td>
                      <td className="text-right py-6 font-medium">
                        ${invoiceData.amount.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Payment Summary */}
              <div className="flex justify-end mb-8">
                <div className="w-80">
                  <Card className="bg-gray-50 p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">
                          ${invoiceData.amount.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (0%):</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-gray-200 text-lg font-bold">
                        <span>Total:</span>
                        <span>${invoiceData.amount.toFixed(2)}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Payment Information */}
              <div className="grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200 mb-8">
                {/* Payment Method */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Payment Method
                  </h4>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <div className="w-4 h-3 bg-white rounded-sm flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">
                          V
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-600">•••• •••• •••• 4242</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Charged on {invoiceData.chargedDate}
                  </p>
                </div>

                {/* Payment Status */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Payment Status
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                      <CheckCircle className="w-3.5 h-3.5 mr-1" />
                      {invoiceData.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Transaction ID: {invoiceData.transactionId}
                  </p>
                </div>
              </div>

              {/* Notes & Terms */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Notes & Terms
                </h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    Thank you for choosing StudyBud for your educational
                    technology needs.
                  </p>
                  <p>
                    This invoice reflects your monthly subscription to our
                    Enterprise plan, providing unlimited access to all platform
                    features.
                  </p>
                  <p>
                    For questions about this invoice, please contact our billing
                    team at billing@studybuddy.ai or call +1 (555) 123-4567.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DownloadInvoice;
