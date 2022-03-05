function Contents() {
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
			'data-sa': 'flip-left',
			'data-sa-once': 'false',
			'data-sa-offset': '50vw'
		},
		{
			'data-sa': 'scale',
			'data-sa-offset': '500',
			'data-sa-duration': '5000'
		},
		{
			'data-sa': 'fade',
			'data-sa-duration': '1500',
			'data-sa-delay': '500'
		},
	]

	console.log(boxs)
	return (
		<div className="contents">
			<section id="main">
                <h2>
                    <ul className="mainText">
                    </ul>
                    Scroll Animation
                </h2>
            </section>

			<section>

			</section>
		</div>
	);
}

export default Contents;
