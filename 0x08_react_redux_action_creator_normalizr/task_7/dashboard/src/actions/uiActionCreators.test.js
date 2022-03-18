import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('action creators', () => {
  it('login', () => {
    const user = { email: 'account@domain.extension', password: 123456789 };
    const data = { type: LOGIN, user };
    const result = login(user.email, user.password);

    expect(result).toEqual(data);
  });

  it('logout', () => {
    const data = { type: LOGOUT };
    const result = logout();

    expect(result).toEqual(data);
  });

  it('displayNotificationDrawer', () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const result = displayNotificationDrawer();

    expect(result).toEqual(data);
  });

  it('hideNotificationDrawer', () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const result = hideNotificationDrawer();

    expect(result).toEqual(data);
  });
  describe("Async action creators tests", function () {
    afterEach(() => {
      fetchMock.restore();
    });

    it("should verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS", () => {
      // Return the promise
      const store = mockStore({});
      fetchMock.restore();

      const user = {
        email: "test@test.com",
        password: "123456",
      };

      fetchMock.get("http://localhost:8564/login-success.json", "{}");

      return store
        .dispatch(loginRequest(user.email, user.password))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginSuccess());
        });
    });

    it("should verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE", () => {
      // Return the promise
      const store = mockStore({});

      fetchMock.mock("http://localhost:8564/login-success.json", 500);

      const user = {
        email: "test@test.com",
        password: "123456",
      };

      return store
        .dispatch(loginRequest(user.email, user.password))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginFailure());
        });
    });
  });
});
