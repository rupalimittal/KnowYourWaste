import React, {useState, useEffect} from 'react';
import { Cloudinary } from 'cloudinary-core';

export default function Header(props) {
  //console.log("inside header",props);
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState(null);
	const [imageURL, setImageURL] = useState("");

	const uploadImage = async e => {
		const files = e.target.files
		const data = new FormData()
		data.append('file',files[0])
		data.append('upload_preset', 'wasteimages')
		setLoading(true)

		const res1 = await fetch("https://api.cloudinary.com/v1_1/neel0506/image/upload", {
			method: 'POST',
			body: data
		})

		const file = await res1.json()
		console.log("Image Uploaded:");
		console.log(file.secure_url);
		setImageURL(file.secure_url);

		const file1 = await fetch('https://glacial-wave-95212.herokuapp.com/predict', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				"image" : file.secure_url
			})
		})


		.then(res => res.json())
		.then(data => {
			console.log(data);
			setImage(data.predict)	
			setLoading(false)
		})
		.catch(err=>{
            console.log(err);
			console.log("Some Error while processing the image.")
		})
	}

	function refreshPage() {
		window.location.reload(false);
	}


	return (
    	<div>
        	<section class="ui-section-hero">
        	<div class="ui-layout-container">
          		<div class="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
            		<div>
            		<h1>KNOW YOUR WASTE!!</h1>
              		<p class="ui-text-intro">Let's nurture the nature so that we can have a better future.</p>
              
              		<div class="ui-component-cta ui-layout-flex">
           
						<input type="file" id="InputFile" name = "file"
							onChange={uploadImage} />

                  		<button onClick={refreshPage} className="display-button">Reset</button>
              		</div>
            	</div>
            
            	<img src="https://seo-manager.s3-ap-southeast-1.amazonaws.com/prod/public/seo/topicPages/98c8598a-b9b1-4edc-957f-2a2778be30158796997052496045329.png" />
        	</div>
			<div>
				{
					loading ? (
						<img className="loading-gif" src="https://cdn.dribbble.com/users/227188/screenshots/6792663/recycle.gif" />
					) : (
						<div className="display-image">
							<img className="waste-image" src={imageURL} />
						</div>
					)
				}
			<div className="waste-type-div">
				<h2 class='waste-heading'>{image}</h2>
			</div>	
			</div>
        </div>
    	</section> 
    </div>
  );
}
