
	
	//Create Variables for elements and selectors
	
	var openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input'),
		lastFocusedElement;

		
	function init() {
		initEvents();	
	}

	//Add Event Listeners to elements 
	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key to close window.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

  //Open the search window
	function openSearch() {
		lastFocusedElement = document.activeElement;
		searchContainer.classList.add('search--open');
		inputSearch.focus();
	}

	//close the search window
	function closeSearch() {
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
		if (lastFocusedElement) { // restore focus
			lastFocusedElement.focus();
		}
	}

	init();

