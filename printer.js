const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
 



let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: 'tcp://192.168.1.8'
});
 
 async function printTicket()
{

    printer.alignCenter();
    await printer.printImage('../image/image.png')
    printer.cut();
    console.log('le fichier est bien imprimer')
    try 
    {
        let execute = await printer.execute()
        console.log(execute)
        console.error("Print done!");
    } 
    catch (error) 
    {
        console.log("Print failed:", error);
    }

}

module.exports.printTicket = printTicket
