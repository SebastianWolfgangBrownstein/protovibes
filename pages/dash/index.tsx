import { InferGetServerSidePropsType } from "next";
import { withIronSessionSsr } from "iron-session/next"
import { sessionOptions } from '../../server/lib/session';
import type { CurrentUser } from '../../server/lib/session';
import Dashboard from "../../components/dashboard/Dashboard";

export default function DashboardPage({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            {
                user && user.isLoggedIn && (<Dashboard user={user} />)
            }
        </>
    )
}

export const getServerSideProps = withIronSessionSsr(async function ({
    req,
    res
}) {
    const user = req.session.user;

    if (user === undefined) {
        res.setHeader('location', '/');
        res.statusCode = 302;
        res.end();

        return {
            props: {
                user: { isLoggedIn: false, accessCode: '' } as CurrentUser
            }
        }
    }

    return {
        props: {
            user: req.session.user
        }
    }
}, sessionOptions)