import { db } from "../../lib/db";
export const posts = () => {
  return db.post.findMany();
};
export const post = ({
  id
}) => {
  return db.post.findUnique({
    where: {
      id
    }
  });
};
export const createPost = ({
  input
}) => {
  return db.post.create({
    data: input
  });
};
export const updatePost = ({
  id,
  input
}) => {
  return db.post.update({
    data: input,
    where: {
      id
    }
  });
};
export const deletePost = ({
  id
}) => {
  return db.post.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsInBvc3RzIiwicG9zdCIsImZpbmRNYW55IiwiaWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVQb3N0IiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlUG9zdCIsInVwZGF0ZSIsImRlbGV0ZVBvc3QiLCJkZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL3NlcnZpY2VzL3Bvc3RzL3Bvc3RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUXVlcnlSZXNvbHZlcnMsIE11dGF0aW9uUmVzb2x2ZXJzIH0gZnJvbSAndHlwZXMvZ3JhcGhxbCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuXG5leHBvcnQgY29uc3QgcG9zdHM6IFF1ZXJ5UmVzb2x2ZXJzWydwb3N0cyddID0gKCkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCBwb3N0OiBRdWVyeVJlc29sdmVyc1sncG9zdCddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdDogTXV0YXRpb25SZXNvbHZlcnNbJ2NyZWF0ZVBvc3QnXSA9ICh7IGlucHV0IH0pID0+IHtcbiAgcmV0dXJuIGRiLnBvc3QuY3JlYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvc3Q6IE11dGF0aW9uUmVzb2x2ZXJzWyd1cGRhdGVQb3N0J10gPSAoeyBpZCwgaW5wdXQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC51cGRhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0OiBNdXRhdGlvblJlc29sdmVyc1snZGVsZXRlUG9zdCddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIucG9zdC5kZWxldGUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG4iXSwibWFwcGluZ3MiOiJBQUVBLFNBQVNBLEVBQUU7QUFFWCxPQUFPLE1BQU1DLEtBQThCLEdBQUdBLENBQUEsS0FBTTtFQUNsRCxPQUFPRCxFQUFFLENBQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELE9BQU8sTUFBTUQsSUFBNEIsR0FBR0EsQ0FBQztFQUFFRTtBQUFHLENBQUMsS0FBSztFQUN0RCxPQUFPSixFQUFFLENBQUNFLElBQUksQ0FBQ0csVUFBVSxDQUFDO0lBQ3hCQyxLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1HLFVBQTJDLEdBQUdBLENBQUM7RUFBRUM7QUFBTSxDQUFDLEtBQUs7RUFDeEUsT0FBT1IsRUFBRSxDQUFDRSxJQUFJLENBQUNPLE1BQU0sQ0FBQztJQUNwQkMsSUFBSSxFQUFFRjtFQUNSLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1HLFVBQTJDLEdBQUdBLENBQUM7RUFBRVAsRUFBRTtFQUFFSTtBQUFNLENBQUMsS0FBSztFQUM1RSxPQUFPUixFQUFFLENBQUNFLElBQUksQ0FBQ1UsTUFBTSxDQUFDO0lBQ3BCRixJQUFJLEVBQUVGLEtBQUs7SUFDWEYsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNUyxVQUEyQyxHQUFHQSxDQUFDO0VBQUVUO0FBQUcsQ0FBQyxLQUFLO0VBQ3JFLE9BQU9KLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDWSxNQUFNLENBQUM7SUFDcEJSLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9