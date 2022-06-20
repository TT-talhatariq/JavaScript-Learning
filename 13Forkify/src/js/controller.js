import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/pagination.js';

import bookmarksView from './views/bookmark.js';

// import icons from '../img/icons.svg'; //Parcel 1
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(recipeView);
    recipeView.renderSpinner();

    //Update Result view

    resultView.update(model.getSearchResultsPage());
    //Loading Recipe

    await model.loadRecipe(id);
    const { recipe } = model.state;
    //Render View
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //Get Query
    const query = searchView.getQuery();
    if (!query) return;

    resultView.renderSpinner();
    //Load Results
    await model.loadSearchResults(query);
    resultView.render(model.getSearchResultsPage(2));

    //Render pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultView.render(model.getSearchResultsPage(goToPage));

  //Render pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the Recipe servings (in state)
  model.updateServings(newServings);

  // Update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmark = function () {
  //Add or Remove book mark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }

  //Update UI
  recipeView.update(model.state.recipe);

  //Render Book Marks
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
};
init();
