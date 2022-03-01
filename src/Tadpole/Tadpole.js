import React from 'react';

const JSZip = require('jszip');



export default function Tadpole () {
	const fup = React.useRef(null);

	function handleUpload () {
		const file = fup.current.files[0];
		if (!file) return;

		const zip = new JSZip();
		zip.loadAsync(file).then(function (zip) {
			// console.log(zip);
			for (let file in zip.files) {
				console.log(file);
			}
		});
	}

	return (
		<div className="Tadpole">
			<header className="min-h-screen bg-green-500 text-white flex flex-col">
				<h2 className="m-auto text-5xl" onClick={handleUpload}>Tadpole</h2>
				<div className="bg-green-400 p-4">
					<input ref={fup} type="file" name="" id="" />
				</div>
			</header>
		</div>
	);
}
