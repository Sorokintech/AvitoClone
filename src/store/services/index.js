import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skyVitoApi = createApi({
    reducerPath: "skyVitoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8090/",  
        prepareHeaders: (headers, { getState }) => {
            const token = (getState()).auth.token;
            if (token) {
              headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
          }
    }), 
    endpoints: (builder) => ({
      getAllAds: builder.query({
        query: () => ({
          url: '/ads/'
        })
      }), 
      getAds: builder.query({
        query: (payload) => ({
          url: `/ads/${payload}`
        })
      }), 
      getAllUserAds: builder.query({
        query: () => ({
          url: '/ads/me/'
        })
      }), 
      getAllUsers  : builder.query({
        query: () => ({
          url: '/user/all/'
        })
      }), 
      getCurrentUser  : builder.query({
        query: () => ({
          url: '/user/'
        })
      }),
      getAllImages: builder.query({
        query: () => ({
          url: '/images/'
        })
      }), 
      getImageById: builder.query({
        query: ( payload ) => ({
          url: `/images/${payload}/`
        })
      }), 
      getAllComments: builder.query({
        query: () => ({
          url:'/comments/'
        })
      }),
    SignIn: builder.mutation({
        query: ({ ...payload }) => ({
            url: '/auth/login/',
            method: 'POST',
            body: payload
          })
    }),
    SignUp: builder.mutation({
      query: ({ ...payload }) => ({
          url: '/auth/register/',
          method: 'POST',
          body: payload
        })
  }),
    refreshToken: builder.mutation({
        query: ({ ...payload }) => ({
            url: '/auth/login/',
            method: 'PUT',
            body: payload
          })
    }),
    createAd: builder.mutation({
      query: ({ ...payload }) => ({
          url: '/ads/',
          method: 'POST',
          body: payload
        })
  }),
    createAdText: builder.mutation({
      query: ({ ...payload }) => ({
          url: '/adstext/',
          method: 'POST',
          body: payload
        })
  }),
    changeAd: builder.mutation({
      query: ({ id, ...payload }) => ({
          url: `/ads/${id}`,
          method: 'PATCH',
          body: payload
        })
    }),
    addImage: builder.mutation({
      query: ({ id, ...payload }) => ({
          url: `/ads/${id}/image`,
          method: 'POST',
          body: payload.formData
        })
  }),
    deleteImage: builder.mutation({
      query: ({ ...payload }) => ({
          url: `/ads/${payload}/image`,
          method: 'DELETE',
          body: payload
        })
  }),
  deleteAdById: builder.mutation({
    query: ( payload ) => ({
        url: `/ads/${payload}/`,
        method: 'DELETE',
        body: payload
      })
}),

    addComment: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/ads/${id}/comments`,
        method: 'POST',
        body: payload
      })
  }),
  changeAvatar: builder.mutation({
    query: (payload) => ({
        url: `/user/avatar`,
        method: 'POST',
        body: payload
      })
  }),
  changeUser: builder.mutation({
    query: ({...payload}) => ({
        url: `/user`,
        method: 'PATCH',
        body: payload
      })
  }),
    })
})

export const  { 
  useDeleteAdByIdMutation,
  useChangeAvatarMutation,
  useGetCurrentUserQuery,
  useChangeUserMutation,
  useAddCommentMutation,
  useChangeAdMutation,
  useCreateAdTextMutation,
  useAddImageMutation,
  useCreateAdMutation,
  useDeleteImageMutation,
  useGetAllAdsQuery,
  useGetAllImagesQuery,
  useGetImageByIdQuery, 
  useGetAllUserAdsQuery, 
  useGetAllUsersQuery, 
  useGetAllCommentsQuery, 
  useSignUpMutation, 
  useSignInMutation,
  useGetAdsQuery, 
  useRefreshTokenMutation
}  = skyVitoApi;