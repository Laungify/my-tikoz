import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDocs, serverTimestamp } from "firebase/firestore";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "../../../common/firebase/firebase";

 const ticketsServiceApi = createApi({
  reducerPath: "ticketsServiceApi",
  baseQuery: fakeBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      queryFn: async () => {
        try {
          const productRef = collection(db, "tickets");
          const querySnapshot = await getDocs(productRef);
          let ticketItems = [];
          querySnapshot?.forEach((doc) => {
            ticketItems.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          return { data: ticketItems };
        } catch (e) {
          return { error: e };
        }
      },
      queryTag: "tickets",
    }),
    addTickets: builder.mutation({
      async queryFn(data) {
        try {
          const docRef = await addDoc(collection(db, "tickets"), {
            ...data,
            timestamp: serverTimestamp(),
          });
          return { data: { id: docRef.id, ...data } };
        } catch (e) {
          return { error: e };
        }
      },
      invalidatesTags: ["tickets"],
    }),
  }),
});

export default ticketsServiceApi



//baseQuery is defined twice with different values. Remove one of them.
//The addProducts mutation should return the added document's ID so that it can be used in the UI if needed. Modify the return value to include the ID of the added document.
//It is recommended to include invalidatesTags in the addProducts mutation so that the cache can be updated after a new product is added. Use the queryTag that is set in fetchProducts query as the invalidation tag.
