
        let els = document.querySelectorAll('.rating')
    function collect_ratings() {
        const ratings = {
            count: 0,
            sum: 0,
            average: 0
        }
        let rating = 0;
        els.forEach((element)=>{
            rating = parseInt(element.id.replace('star',''))
            ratings.count = parseInt(element.value)
            ratings.sum = parseInt(element.value)
        });
        if (ratings.count!==0) {
            ratings.sum = ratings.average/ratings.count;
        }

        return ratings;
    }
    els.forEach((el)=> {
        el.addEventListener('change', ()=> {
            const ratings = collect_ratings();
            document.querySelector('#average').textContent = Math.round(ratings.average * 100) / 100
        });
    })
    document.addEventListener('change', ()=> {
        const ratings = collect_ratings();
        document.querySelector('#average').textContent = Math.round(ratings.average * 100) / 100
    });