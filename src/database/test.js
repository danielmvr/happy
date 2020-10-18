const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {

    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-22.887052",
        lng: "-43.2674118",
        name: "Local de Amor",        
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"21998660066",
        images: [
            "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1530759222099-f94d63af70e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'")) // DELETE FROM ---> apaga tudo!CUIDADO
})