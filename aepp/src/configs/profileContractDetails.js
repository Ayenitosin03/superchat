export default {
  contractAddress: 'ct_2VUtsF9a9Wtp6qyS5mT7Y3UVTX9MJZBZH3wMoCovf867mSqRdm',
  contractSource: `contract SuperChatProfile =

  record user =
    { name  : string,
      about : string,
      image : string,
      owner : address }

  record state = { profile : map(address, user) }

  stateful entrypoint init() : state = { profile = {} }

  entrypoint empty_profile() : user =
    let empty_profile = { name = "", about = "", image = "", owner = Call.caller }
    empty_profile

  stateful entrypoint register_profile(name': string, about': string, image': string) : user =
    let new_profile = { name = name', about = about', image = image', owner = Call.caller }
    put(state{ profile[Call.caller] = new_profile })
    new_profile

  entrypoint get_profile() : user =
    Map.lookup_default(Call.caller, state.profile, empty_profile())

  entrypoint get_all_profile() : map(address, user) = state.profile`
}