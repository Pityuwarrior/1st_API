/* express fügvény meghívásha és egy midware-t készítünk.  
const express = require('express')
const app = express();
const PORT = 8080;
*/

/* Érték átadása */
app.get('/tshirt', (req, res) => 
{
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.use( express.json() )

/* adatok átadása a szervernek */
/* :id begyűjti a dinamikus értékeket az url-ből.*/
app.post('/tshirt/:id', (req, res) => 
{
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) 
    {
        res.status(418).send({message: 'We need a logo'})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}` ,
    });
});

/* szerver elindítása és status lekérése a hostról*/ 
app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)
