/**
 * ids should never change else all previous privileges assigned
 * will break. snapshot tests should be used to make sure this does not happen
 */

const routeNames = {
  dashboard: {
    displayName: "Dashboard",
    id: "dashboard",
    path: "",
  },
  products: {
    displayName: "Products",
    id: "products",
    path: "products",
    description: "Manage core products, vendors and bundles here",
    privilegeId: "products.allSubmodules.full",
    submodules: {
      cores: {
        displayName: "Core Products",
        id: "coreProducts",
        path: "cores",
        description: "Add, edit and manage core products here",

        privilegeId: "products.cores.full",
        actions: {
          viewCoreProducts: {
            id: "products.cores.viewCoreProducts",
            name: "View Core Products",
            description: "View all core products",
          },
          addCoreProducts: {
            id: "products.cores.addCoreProducts",
            name: "Add Core Products",
            description: "Add new core products",
          },
          exportCoreProducts: {
            id: "products.cores.exportCoreProducts",
            name: "Export Core Products",
            description: "Export all core products to CSV",
          },
          importCoreProducts: {
            id: "products.cores.importCoreProducts",
            name: "Import Core Products",
            description: "Import new core products from CSV",
          },
          editCoreProducts: {
            id: "products.cores.editCoreProducts",
            name: "Edit Core Products",
            description: "Edit all core products",
          },
          archiveCoreProducts: {
            id: "products.cores.archiveCoreProducts",
            name: "Archive Core Products",
            description: "Archive any core product",
          },
          viewCoreProductsTransactionHistory: {
            id: "products.cores.viewCoreProductsTransactionHistory",
            name: "View Transaction History",
            description: "View transaction history of any core product",
          },
          printCoreProductsBarcode: {
            id: "products.cores.printCoreProductsBarcode",
            name: "Print Barcode",
            description: "Print the barcode for any core product",
          },
        },
      },
      vendors: {
        displayName: "Vendors",
        id: "vendors",
        path: "vendors",
        description: "Add, edit and manage vendors here",

        privilegeId: "products.vendors.full",
        actions: {
          viewVendors: {
            id: "products.vendors.viewVendors",
            name: "View Vendors",
            description: "View all vendors",
          },
          addVendors: {
            id: "products.vendors.addVendors",
            name: "Add Vendors",
            description: "Add new vendors",
          },
          editVendors: {
            id: "products.vendors.editVendors",
            name: "Edit Vendors",
            description: "Edit existing vendors",
          },
          exportVendors: {
            id: "products.vendors.exportVendors",
            name: "Export Vendors",
            description: "Export all vendors to CSV",
          },
          importVendors: {
            id: "products.vendors.importVendors",
            name: "Import Vendors",
            description: "Import new vendor data from CSV",
          },
          archiveVendors: {
            id: "products.vendors.archiveVendors",
            name: "Archive Vendors",
            description: "Archive existing vendors",
          },
          viewTransactionHistory: {
            id: "products.vendors.viewTransactionHistory",
            name: "View Transaction History",
            description: "View access to any vendor's transaction history",
          },
        },
      },
      bundles: {
        displayName: "Bundles",
        id: "bundles",
        path: "bundles",
        description: "Add, edit and manage bundles here",

        privilegeId: "products.bundles.full",
        actions: {
          viewBundles: {
            id: "products.bundles.viewBundles",
            name: "View Bundles",
            description: "View access to all bundles",
          },
          addBundles: {
            id: "products.bundles.addBundles",
            name: "Add Bundles",
            description: "Add new bundles",
          },
          editBundles: {
            id: "products.bundles.editBundles",
            name: "Edit Bundles",
            description: "Edit any existing bundle",
          },
          exportBundles: {
            id: "products.bundles.exportBundles",
            name: "Export Bundles",
            description: "Export all bundles to CSV",
          },
          importBundles: {
            id: "products.bundles.importBundles",
            name: "Import Bundles",
            description: "Import new bundles from CSV",
          },
          archiveBundles: {
            id: "products.bundles.archiveBundles",
            name: "Archive Bundles",
            description: "Archive any existing bundles",
          },
          viewManufacturingHistory: {
            id: "products.bundles.viewManufacturingHistory",
            name: "View Manufacturing History",
            description: "View the manufacturing history of any bundle",
          },
          printBarcode: {
            id: "products.bundles.printBarcode",
            name: "Print Barcode",
            description: "Print the barcode for any bundle",
          },
        },
      },
    },
  },
};

export default routeNames;
