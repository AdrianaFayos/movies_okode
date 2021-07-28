import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';

describe('MoviesPage', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPage ],
      imports: [IonicModule.forRoot()],
      providers: [MovieService]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // Trying to create tests
  
  // describe('When searchMovies() is called', () => {

  //   it('all should be fine', () => {
      
  //     spyOn(component.movieService, 'searchMovies').and.returnValue(of({results: []}));
  //     component.movieService.searchMovies('spiderman');
  //     expect(component.movieService).toBeTruthy;
      
  //   });

  // })


});
