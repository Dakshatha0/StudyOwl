const router = require('express').Router();

router.get('/post', (req, res)=> {
    res.json({
        id: '123'
    })
})

router.get('/poste', (req, res)=> {
    res.json({
        dat: [
            {sla:'aas'}, {sefr: 'cfrg'}
        ]
    })
})
module.exports = router;