import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

class AppPermission {
  checkPermission = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      switch (result) {
        case RESULTS.GRANTED:
          return true

        case RESULTS.DENIED:
          return this.requestPermission(
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          );

        case RESULTS.UNAVAILABLE:
          return false;

        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  };

  requestPermission = async (permission) => {
    try {
      const result = await request(permission);
      return result === RESULTS.GRANTED;
    } catch (error) {
      return false;
    }
  };
}

const Permission = new AppPermission();
export default Permission;
