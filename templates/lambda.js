// Función que saluda
function saludar(nombre = "Mundo") {
    return `¡Hola ${nombre}!`;
}

// Handler de AWS Lambda
exports.handler = async (event, context) => {
    console.log("¡Hola Mundo desde AWS Lambda!");
    console.log("Event recibido:", JSON.stringify(event, null, 2));
    console.log("Context:", JSON.stringify(context, null, 2));
    
    // Obtener el nombre del evento si existe
    const nombre = event.nombre || event.name || "Mundo";
    
    // Mensaje de saludo
    const mensaje = saludar(nombre);
    
    // Información del entorno Lambda
    const info = {
        mensaje: mensaje,
        timestamp: new Date().toISOString(),
        requestId: context.awsRequestId,
        functionName: context.functionName,
        functionVersion: context.functionVersion,
        memoryLimit: context.memoryLimitInMB,
        nodeVersion: process.version,
        platform: process.platform
    };
    
    console.log("Respuesta:", JSON.stringify(info, null, 2));
    
    // Respuesta de Lambda
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info, null, 2)
    };
}; 