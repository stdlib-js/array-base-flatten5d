// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function o(r,o,f){var n,e,s,t,i,u,a,d,p,l,m,h,c,g,j;if(e=o[4],s=o[3],t=o[2],i=o[1],u=o[0],n=[],f){for(a=0;a<e;a++)for(d=0;d<s;d++)for(p=0;p<t;p++)for(l=0;l<i;l++)for(m=0;m<u;m++)n.push(r[m][l][p][d][a]);return n}for(m=0;m<u;m++)for(j=r[m],l=0;l<i;l++)for(g=j[l],p=0;p<t;p++)for(c=g[p],d=0;d<s;d++)for(h=c[d],a=0;a<e;a++)n.push(h[a]);return n}function f(r,o,f,n,e,s){var t,i,u,a,d,p,l,m,h,c,g,j,v,b,x;if(t=o[4],i=o[3],u=o[2],a=o[1],d=o[0],x=s,f){for(p=0;p<t;p++)for(l=0;l<i;l++)for(m=0;m<u;m++)for(h=0;h<a;h++)for(c=0;c<d;c++)n[x]=r[c][h][m][l][p],x+=e;return n}for(c=0;c<d;c++)for(b=r[c],h=0;h<a;h++)for(v=b[h],m=0;m<u;m++)for(j=v[m],l=0;l<i;l++)for(g=j[l],p=0;p<t;p++)n[x]=g[p],x+=e;return n}r(o,"assign",f);export{f as assign,o as default};
//# sourceMappingURL=index.mjs.map