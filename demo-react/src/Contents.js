import React, { useEffect } from 'react';

const Contents = () => {
    const boxs = [
        {'data-sa': 'fade'},
        {'data-sa': 'from-right'},
        {'data-sa': 'from-top'},
        {'data-sa': 'from-bottom'},
        {'data-sa': 'from-left'},
        {'data-sa': 'flip-right'},
        {'data-sa': 'flip-top'},
        {'data-sa': 'flip-bottom'},
        {'data-sa': 'flip-left'},
        {'data-sa': 'scale'},
        {
            'data-sa': 'from-top',
            'data-sa-duration': '2500'
        },
        {
            'data-sa': 'from-bottom',
            'data-sa-delay': '1000'
        },
        {
            'data-sa': 'from-left',
            'data-sa-once': 'false',
            'data-sa-offset': '50'
        },
        {
            'data-sa': 'from-right',
            'data-sa-once': 'false',
            'data-sa-offset': '500'
        },
        {
            'data-sa': 'scale',
            'data-sa-duration': '5000',
            'data-sa-time': 'ease-out'
        },
        {
            'data-sa': 'scale',
            'data-sa-duration': '5000',
            'data-sa-time': ' ease-in'
        },
        {
            'data-sa': 'fade',
            'data-sa-duration': '1500',
            'data-sa-delay': '500'
        },
    ];
    const box = boxs.map((box, boxIdx) => {
        return (
            <div
                className="box"
                key={boxIdx}
                {...box}
            >
				<pre>
					{
                        Object.entries(box).map((val) => {
                            return `${val[0]}="${val[1]}"\n`
                        })
                    }
				</pre>
            </div>
        )
    });

    useEffect(() => {
        const height = mainText.offsetHeight;
        let flag = false;
        let i = 1;

        const loop = setInterval(() => {
            // mainText.style.transform = `translateY(-${height * i}px)`;
            console.log(flag)
            if ( flag ) {
                if ( i === 0 ) {
                    flag = false;
                    i++;
                    return;
                }
                i--;
            } else {
                if ( i === mainTextArr.length - 1 ) {
                    flag = true;
                    i--;
                    return;
                }
                i++;
            }
        }, 4000);
    })

    const mainTextArr = ['easy', 'simple'];
    const mainText = mainTextArr.map((text, idx) => {
        return <li key={idx}>{text}</li>
    })

    return (
        <div className="contents">
            <section id="main">
                <h2>
                    <div className="mainText">
                        <ul>{mainText}</ul>
                    </div>
                    <p>Scroll Animation</p>
                </h2>
            </section>

            <section>
                {box}
            </section>
        </div>
    );
}

export default Contents;