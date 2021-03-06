import DiscordConnection from './DiscordConnection'
type RawClientUser = {
    /**The user id of the user. */
    id: Snowflake
    /**The username of the user. */
    username: string
    /**The avatar hash of the user. */
    avatar: string | null
    /**The discriminator of the user. */
    discriminator: string
    /**The locale of the user */
    locale:string
    /**The type of nitro that the user has */
    premium_type:number
    /**Whether the user have MFA enabled. */
    mfa_enabled:boolean
    /**The flags on this user */
    flags:number
    /**The connections of this user on discord. */
    connections:Array<DiscordConnection>
    public_flags:number
}
type Snowflake = string
export = RawClientUser