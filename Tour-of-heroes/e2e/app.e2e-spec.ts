import { TourOfHeroesPage } from './app.po';
import { browser } from "protractor/built";

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, edit heroe page', () => {
  let page: TourOfHeroesPage;
  
  beforeEach(() => {
    page = new TourOfHeroesPage;
    console.log('test camilo forero');
    page.navigateToEditHero();
  });

});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should delete a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHeroe();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should edit a hero', () =>{
    page.enterEditHeroInInput('Camilo');
    expect(page.getFirstHeroe()).toBe("Camilo");
  });

  it('should navigate to hero', ()=>{
    var valor = page.navigateToHeroe().getText();
    expect(valor).toBe('Tour of Heroes');
  });

});
