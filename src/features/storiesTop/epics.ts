import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { forkJoin, from, Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { api, firebase } from '../../app/firebase';
import { RootState } from '../../app/rootReducer';
import { getTopStoriesFailed, getTopStoriesStart, getTopStoriesSuccess } from './top-stories-slice';

const loadData = (): Observable<AnyAction> => {
  return from(api.child("topstories").limitToFirst(50).once("value")).pipe(
    map((ds) => ds.val() as number[]),
    switchMap((ids) => {
      return forkJoin(
        ids.map((id) =>
          from(api.child("item/" + id).once("value"))
        ) as Observable<firebase.database.DataSnapshot>[]
      );
    }),
    map((data) => data.map((entry) => entry.val())),
    map((stories) => getTopStoriesSuccess(stories)),
    catchError((error) => {
      console.log(error);
      return of(getTopStoriesFailed(error));
    })
  );
};

const retrieveTopStories = (): Observable<AnyAction> => {
  return loadData().pipe(catchError((error) => of(getTopStoriesFailed(error))));
};

export const topStoriesEpic: Epic<AnyAction, AnyAction, RootState> = (
  action$
) =>
  action$.pipe(
    filter(getTopStoriesStart.match),
    switchMap(() => retrieveTopStories())
  );
