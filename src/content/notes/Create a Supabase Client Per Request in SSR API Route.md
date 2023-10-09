---
title: Create a Supabase Client Per Request in SSR API Route
tags: dev
---

In SSR API Routes, you don't have access to the supabase client that you've set up in your application. This will prevent you from sending authed requests to supabase even if you have a valid session or access token in your cookies.

The recommended solution is to create a new supabase client per request in your SSR API routes configured with the access token of the current user.

```ts
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL, 
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
  { global: { 
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  })
```


[reference](https://github.com/supabase/gotrue-js/pull/340#issuecomment-1218065610)

