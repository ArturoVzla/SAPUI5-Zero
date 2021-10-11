sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },
    createContent: function (oController) {
        // here we'll create ourUIviaJScoding
        // thecolumnswillactascolumnheaders
        var aColumns = [
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "ID"
                })
            }),
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "Name"
                })
            })
        ];
        // inthetemplate,we’lldisplaythesupplierinformation
        var oTemplate = new sap.m.ColumnListItem({
            type: "Navigation",
            press: [oController.onListPress,oController],
            cells: [
                new sap.m.ObjectIdentifier({
                    text: "{ID}"
                }),
                new sap.m.ObjectIdentifier({
                    text: "{Name}"
                })
            ]
        });
        // intheheader,we’redisplaying thenumberofsuppliers
        var oTableHeader = new sap.m.Toolbar({
            content: [
                new sap.m.Title({
                    text: "NumberofSuppliers:{/CountSuppliers}"
                })
            ]
        });
        // wecreatethetablewiththecolumnsandheader
        var oTable = new sap.m.Table({
            columns: aColumns,
            headerToolbar: oTableHeader
        });
        // webindthetableitemstothe/Suppliersentries
        // andtothetemplate
        oTable.bindItems("/Suppliers", oTemplate);
        var oPageMaster = new sap.m.Page({
            title: "SupplierOverview",
            content: [oTable]
        });
        return oPageMaster;
        //var oApp=new sap.m.App("myApp");
        //oApp.addPage(oPageMaster);
        //oApp.placeAt("content");
    }
});