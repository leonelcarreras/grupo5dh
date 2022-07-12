
window.onload = function () {

  
    let form = document.querySelector("#form");
    let button = document.querySelector("#boton");


    let marca_id = document.querySelector("#marca_id");
    let marca_idError = document.querySelector("#marca_idError");

    let modelo = document.querySelector("#modelo");
    let modeloError = document.querySelector("#modeloError");

    let camaraResolucion = document.querySelector("#camaraResolucion");
    let camaraResolucionError = document.querySelector("#camaraResolucionError");

    let videoResolucion = document.querySelector("#videoResolucion");
    let videoResolucionError = document.querySelector("#videoResolucionError");
    
    let pantallaModelo = document.querySelector("#pantallaModelo");
    let pantallaModeloError = document.querySelector("#pantallaModeloError");

    let procesador = document.querySelector("#procesador");
    let procesadorError = document.querySelector("#procesadorError");

    let pantallaResolucion = document.querySelector("#pantallaResolucion");
    let pantallaResolucionError = document.querySelector("#pantallaResolucionError");

    let memoria = document.querySelector("#memoria");
    let memoriaError = document.querySelector("#memoriaError");

    let bateria = document.querySelector("#bateria");
    let bateriaError = document.querySelector("#bateriaError");
    
    let almacenamiento = document.querySelector("#almacenamiento");
    let almacenamientoError = document.querySelector("#almacenamientoError");
    
    let color = document.querySelector("#color");
    let colorError = document.querySelector("#colorError");

    let price = document.querySelector("#price");
    let priceError = document.querySelector("#priceError");
    
    let ImagenesProducto1 = document.querySelector("#ImagenesProducto1");
    let ImagenesProducto1Error = document.querySelector("#ImagenesProducto1Error");
    
    let ImagenesProducto2 = document.querySelector("#ImagenesProducto2");
    let ImagenesProducto2Error = document.querySelector("#ImagenesProducto2Error");
    
    let ImagenesProducto3 = document.querySelector("#ImagenesProducto3");
    let ImagenesProducto3Error = document.querySelector("#ImagenesProducto3Error");
    


    button.addEventListener("click", (e) => {

      

        let errores = [];



        if (marca_id.value < 1) {
            errores.push("id_marca");
            marca_idError.innerText = "El campo Marca debe estar completo"
            console.log(errores)
        } else { marca_idError.innerText = "" };
        if (modelo.value < 1) {
            errores.push("modelo");
            modeloError.innerText = "El campo Modelo debe estar completo"
           
        } else { modeloError.innerText = "" };
        if (procesador.value < 1) {
            errores.push("procesador");
            procesadorError.innerText = "El campo Procesador debe estar completo"
           
        } else { procesadorError.innerText = "" };
        if (camaraResolucion.value < 1) {
            errores.push("camaraResolucion");
            camaraResolucionError.innerText = "El campo Resolucion de Camara debe estar completo"
           
        } else { camaraResolucionError.innerText = "" };
        if (videoResolucion.value < 1) {
            errores.push("videoResolucion");
            videoResolucionError.innerText = "El campo Video Resolucion debe estar completo"
           
        } else { videoResolucionError.innerText = "" };
        if (pantallaModelo.value < 1) {
            errores.push("pantallaModelo");
            pantallaModeloError.innerText = "El campo Modelo de Pantalla debe estar completo"
          
        } else { pantallaModeloError.innerText = "" };
        if (pantallaResolucion.value < 1) {
            errores.push("pantallaResolucion");
            pantallaResolucionError.innerText = "El campo Resolucion de Pantalla debe estar completo"
        } else { pantallaResolucionError.innerText = "" };

        if (bateria.value < 1) 
        {
            errores.push("bateria");
            bateriaError.innerText ="El campo Batería debe estar completo"
           
        } else {bateriaError.innerText = "" };

        if (almacenamiento.value < 1) {
            errores.push("almacenamiento");
            almacenamientoError.innerText = "El campo Almaceamiento debe estar completo"
            
        } else {almacenamientoError.innerText = "" };


        if (memoria.value < 1) {
            errores.push("memoria");
            memoriaError.innerText = "El campo Memoria debe estar completo"
            
        } else { memoriaError.innerText = "" };
        if (color.value < 1){
            errores.push("color");
            colorError.innerText = "El campo Color debe estar completo"
           
        } else {colorError.innerText = "" };

        if (price.value < 1) {
            errores.push("price");
            priceError.innerText = "El campo Precio debe estar completo"
           
        } else {priceError.innerText = "" };

        if (ImagenesProducto1.value < 1) {
            errores.push("ImagenesProducto1");
            ImagenesProducto1Error.innerText = "Debe ingresar la imagen Nro 1 del producto"    
        } else { ImagenesProducto1Error.innerText = "" };
        
        if (ImagenesProducto2.value < 1) {
            errores.push("ImagenesProducto2");
            ImagenesProducto2Error.innerText = "Debe ingresar la imagen Nro 2 del producto"
          
        } else { ImagenesProducto1Error.innerText = "" };
        if (ImagenesProducto3.value < 1) {
            errores.push("ImagenesProducto3");
            ImagenesProducto3Error.innerText = "Debe ingresar la imagen Nro 3 del producto"
          
        } else { ImagenesProducto3Error.innerText = "" };



        if (errores.length > 0) {
            e.preventDefault()

        } else {
            button.click();
            form.submit()
        } 


    })
}
