#include <iostream>
#include <cmath>
#include <cstdio>
using namespace std;
#define mod 1000000007
long long int power(long long int a, long long int b){
    long long int num = 1;
    while(b--){
        num = (num * a%mod)%mod;
    }
    return num;
}
int main(){
    int T;
    cin >> T;
    while(T--){

        int H, t,W, P, Q;
        // taking input
        cin >> H >> W >>P >> Q;//>> P >> Q;
        // caluclating ways
        long long int A[H][W];
        long long int S[H][W];
        long long int T[W+1];
        T[0] = 1;
        T[1] = 1;
        T[2] = 2;
        T[3] = 4;
        for(int i=4; i<W+1;i++){
            T[i] = (T[i-1]%mod+T[i-2]%mod+T[i-3]%mod+T[i-4]%mod)%mod;
    }

            for(int j =0; j< W; j++){
                A[H-1][j] = power(T[j+1],H);
            }
            int sum =0;
        for(int j =0; j< W;j++){
            S[H-1][j] = A[H-1][j];
            sum =0;
            for(int k = 0; k<j;k++){
                sum = (sum%mod + (S[H-1][k]*A[H-1][j-k-1])%mod)%mod;
                //cout << S[i][j] << " ";
                }
            S[H-1][j] = (A[H-1][j]%mod - sum%mod)%mod;
            if(S[H-1][j] < 0)
                S[H-1][j] = mod + S[H-1][j];
        }
        cout << S[H-1][W-1] << endl;
            }
    getchar();
    return 0;

}
