"use strict";var R=function(e,f){return function(){return f||e((f={exports:{}}).exports,f),f.exports}};var j=R(function(F,b){
function A(e,f,x){var u,l,q,S,s,c,o,i,r,a,v,t,n,d,g;if(l=f[4],q=f[3],S=f[2],s=f[1],c=f[0],u=[],x){for(o=0;o<l;o++)for(i=0;i<q;i++)for(r=0;r<S;r++)for(a=0;a<s;a++)for(v=0;v<c;v++)u.push(e[v][a][r][i][o]);return u}for(v=0;v<c;v++)for(g=e[v],a=0;a<s;a++)for(d=g[a],r=0;r<S;r++)for(n=d[r],i=0;i<q;i++)for(t=n[i],o=0;o<l;o++)u.push(t[o]);return u}b.exports=A
});var w=R(function(G,k){
function B(e,f,x,u,l,q){var S,s,c,o,i,r,a,v,t,n,d,g,y,O,m;if(S=f[4],s=f[3],c=f[2],o=f[1],i=f[0],m=q,x){for(r=0;r<S;r++)for(a=0;a<s;a++)for(v=0;v<c;v++)for(t=0;t<o;t++)for(n=0;n<i;n++)u[m]=e[n][t][v][a][r],m+=l;return u}for(n=0;n<i;n++)for(O=e[n],t=0;t<o;t++)for(y=O[t],v=0;v<c;v++)for(g=y[v],a=0;a<s;a++)for(d=g[a],r=0;r<S;r++)u[m]=d[r],m+=l;return u}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=j(),D=w();C(z,"assign",D);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
