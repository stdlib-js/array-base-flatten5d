// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function o(r,o,f){var n,e,s,t,i,u,a,d,p,l,m,h,v,c,g;if(e=o[4],s=o[3],t=o[2],i=o[1],u=o[0],n=[],f){for(a=0;a<e;a++)for(d=0;d<s;d++)for(p=0;p<t;p++)for(l=0;l<i;l++)for(m=0;m<u;m++)n.push(r[m][l][p][d][a]);return n}for(m=0;m<u;m++)for(g=r[m],l=0;l<i;l++)for(c=g[l],p=0;p<t;p++)for(v=c[p],d=0;d<s;d++)for(h=v[d],a=0;a<e;a++)n.push(h[a]);return n}function f(r,o,f,n,e,s){var t,i,u,a,d,p,l,m,h,v,c,g,j,b,x;if(t=o[4],i=o[3],u=o[2],a=o[1],d=o[0],x=s,f){for(p=0;p<t;p++)for(l=0;l<i;l++)for(m=0;m<u;m++)for(h=0;h<a;h++)for(v=0;v<d;v++)n[x]=r[v][h][m][l][p],x+=e;return n}for(v=0;v<d;v++)for(b=r[v],h=0;h<a;h++)for(j=b[h],m=0;m<u;m++)for(g=j[m],l=0;l<i;l++)for(c=g[l],p=0;p<t;p++)n[x]=c[p],x+=e;return n}r(o,"assign",f);export{f as assign,o as default};
//# sourceMappingURL=index.mjs.map
