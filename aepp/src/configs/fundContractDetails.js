export default {
  contractAddress: 'ct_2YtRCEvbqJm62nrd1qwfL1Cx2rN72envMh1nGUVZuN8wJpANrS',
  contractSource: `payable contract SuperChatFund =

  record fund =
    { sender      : address,
      time        : int,
      amount      : int,
      description : string }

  record state = 
    { funds : map(address, map(address, list(fund))),
      admin :  address }

  stateful entrypoint init() : state = 
    { funds = {},
      admin = Call.caller }

  private function check_admin() : bool =
    require(state.admin == Call.origin, "Unauthorized Access")
    true

  payable stateful entrypoint send_fund(receiver: address, description': string) : fund =
    require(get_user_balance() > Call.value, "Insufficient Funds")

    let new_fund : fund = { sender = Call.caller, time = Chain.timestamp, amount = Call.value, description = description' }
    let old_state_senders_funds : map(address, list(fund)) = Map.lookup_default(Call.caller, state.funds, {})
    let old_state_receiver_funds : map(address, list(fund)) = Map.lookup_default(receiver, state.funds, {})

    let old_single_receiver_funds : list(fund) = Map.lookup_default(Call.caller, old_state_receiver_funds, [])
    let old_single_sender_funds : list(fund) = Map.lookup_default(receiver, old_state_senders_funds, [])

    let new_single_receiver_funds : list(fund) = new_fund::old_single_receiver_funds
    let new_single_sender_funds : list(fund) = new_fund::old_single_sender_funds

    let new_state_senders_fund : map(address, list(fund)) = old_state_senders_funds{ [receiver] = new_single_sender_funds }
    let new_state_receivers_fund : map(address, list(fund)) = old_state_receiver_funds{ [Call.caller] = new_single_receiver_funds }

    let new_updated_state : map(address, map(address, list(fund))) = state.funds{ [Call.caller] = new_state_senders_fund, [receiver] = new_state_receivers_fund }
    Chain.spend(receiver, Call.value)
    put(state{ funds = new_updated_state })
    new_fund

  private function get_user_balance() : int = Chain.balance(Call.caller)

  entrypoint get_user_funds() : map(address, list(fund)) =
    Map.lookup_default(Call.caller, state.funds, {})

  entrypoint get_user_friend_fund(friend_address: address) : list(fund) =
    Map.lookup_default(friend_address, get_user_funds(), [])

  entrypoint get_contract_balance() : int = 
    check_admin()
    Contract.balance

  entrypoint get_all_funds() : map(address, map(address, list(fund))) = 
    check_admin()
    state.funds`
}