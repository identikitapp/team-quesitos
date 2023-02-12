import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { userLogin } from "../../../services/user"

const authOptions = {
	pages: {
		signIn: "/login"
	},
	session: {
		strategy: "jwt"
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			async authorize(credentials, req) {
				const { username, password } = credentials
				const user = await userLogin(username, password)
				if (user && !user.error) {
					return user
				}
				return null
			}
		})
	],
	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			return session
		},
		async jwt({ token, user }) {
			if (user) token.user = {
				id: user.data._id,
				username: user.data.username,
				name: user.data.name,
				lastname: user.data.lastname,
				image: user.data.image,
				email: user.data.email,
				token: user.token
			};
			return token
		}
	}
}

export default NextAuth(authOptions)