let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop -150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height)
		{
			navlinks.forEach(links =>{
				links.classList.remove('active');
				document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
			});
		};
	});
	document.getElementById('search-btn').addEventListener('click', function() {
		var query = document.getElementById('search-input').value;
		if (query) {
			alert('Searching for: ' + query);
			// Add your search functionality here
		} else {
			alert('Please enter a search term.');
		}
	});
};