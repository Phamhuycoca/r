import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global/_index.scss'
import { StyleProvider} from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteIndex } from './routers/router.tsx'
import { PrivateRoute } from './routers/router_private.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter >

   <ConfigProvider theme={{ hashed: false }}
   wave={{ disabled: true }}
   >
      <StyleProvider hashPriority="high" >
         <Routes>
                                {RouteIndex.map((router) => (
                                    <Route
                                        key={router.path}
                                        path={router.path}
                                        element={
                                            router.private ? (
                                                <PrivateRoute element={router.element} />
                                            ) : (
                                                router.element
                                            )
                                        }
                                    >
                                        {router.children &&
                                            router.children.map((child) => (
                                                <Route
                                                    key={child.path}
                                                    path={child.path}
                                                    element={
                                                        child.private ? (
                                                            <PrivateRoute element={child.element} />
                                                        ) : (
                                                            child.element
                                                        )
                                                    }
                                                />
                                            ))}
                                    </Route>
                                ))}
                            </Routes>
      </StyleProvider>
   </ConfigProvider>
      </BrowserRouter>
  </StrictMode>,
)
