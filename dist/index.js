"use strict";var R=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(q){throw (r=0, q)}};};var j=R(function(F,b){
function A(e,r,q){var u,l,d,S,s,c,o,i,a,v,f,t,n,g,m;if(l=r[4],d=r[3],S=r[2],s=r[1],c=r[0],u=[],q){for(o=0;o<l;o++)for(i=0;i<d;i++)for(a=0;a<S;a++)for(v=0;v<s;v++)for(f=0;f<c;f++)u.push(e[f][v][a][i][o]);return u}for(f=0;f<c;f++)for(m=e[f],v=0;v<s;v++)for(g=m[v],a=0;a<S;a++)for(n=g[a],i=0;i<d;i++)for(t=n[i],o=0;o<l;o++)u.push(t[o]);return u}b.exports=A
});var w=R(function(G,k){
function B(e,r,q,u,l,d){var S,s,c,o,i,a,v,f,t,n,g,m,y,O,x;if(S=r[4],s=r[3],c=r[2],o=r[1],i=r[0],x=d,q){for(a=0;a<S;a++)for(v=0;v<s;v++)for(f=0;f<c;f++)for(t=0;t<o;t++)for(n=0;n<i;n++)u[x]=e[n][t][f][v][a],x+=l;return u}for(n=0;n<i;n++)for(O=e[n],t=0;t<o;t++)for(y=O[t],f=0;f<c;f++)for(m=y[f],v=0;v<s;v++)for(g=m[v],a=0;a<S;a++)u[x]=g[a],x+=l;return u}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=j(),D=w();C(z,"assign",D);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
