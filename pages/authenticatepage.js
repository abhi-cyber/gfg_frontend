import { useSession, getSession } from "next-auth/react";

const authenticatepage = () => {
    const { data: session, loading } = useSession();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!session) {
        return <p>Not authenticated</p>;
    }
    return (
        <div>
            authenticated as {session.user.email}
        </div>
    );
}

export default authenticatepage;