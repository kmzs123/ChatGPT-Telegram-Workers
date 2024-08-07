/**
 * @type {I18n}
 */
export default {
  env: {
    'system_init_message': 'You are a helpful assistant',
  },
  utils: {
    'not_supported_configuration': 'Not supported configuration or data type error',
  },
  message: {
    'loading': 'Loading',
    'not_supported_chat_type': (type) => `Currently not supported ${type} type of chat`,
    'not_supported_chat_type_message': 'Currently not supported non-text format messages',
    'handle_chat_type_message_error': (type) => `Error handling ${type} type of chat messages`,
    'user_has_no_permission_to_use_the_bot': (id) => `You do not have permission to use this bot, please contact the administrator to add your ID (${id}) to the whitelist`,
    'group_has_no_permission_to_use_the_bot': (id) => `The group has not enabled chat permissions, please contact the administrator to add the group ID (${id}) to the whitelist`,
    'history_empty': 'No history messages',
  },
  command: {
    help: {
      'summary': 'The following commands are currently supported:\n',
      'help': 'Get command help',
      'new': 'Start a new conversation',
      'start': 'Get your ID and start a new conversation',
      'img': 'Generate an image, the complete command format is `/img image description`, for example `/img beach at moonlight`',
      'version': 'Get the current version number to determine whether to update',
      'setenv': 'Set user configuration, the complete command format is /setenv KEY=VALUE',
      'setenvs': 'Batch set user configurations, the full format of the command is /setenvs {"KEY1": "VALUE1", "KEY2": "VALUE2"}',
      'delenv': 'Delete user configuration, the complete command format is /delenv KEY',
      'clearenv': 'Clear all user configuration',
      'usage': 'Get the current usage statistics of the robot',
      'system': 'View some system information',
      'redo': 'Redo the last conversation, /redo with modified content or directly /redo',
      'echo': 'Echo the message',
      'bill': 'View current bill',
    },
    img: {
      'help': 'Please enter the image description. The complete command format is `/img raccoon cat`',
    },
    new: {
      'new_chat_start': 'A new conversation has started',
      'new_chat_start_private': (id) => `A new conversation has started, your ID (${id})`,
      'new_chat_start_group': (id) => `A new conversation has started, group ID (${id})`,
    },
    setenv: {
      'help': 'Configuration item format error: the complete command format is /setenv KEY=VALUE',
      'update_config_success': 'Update configuration successfully',
      'update_config_error': (e) => `Configuration item format error: ${e.message}`,
    },
    version: {
      'new_version_found': (current, online) => `New version found, current version: ${JSON.stringify(current)}, latest version: ${JSON.stringify(online)}`,
      'current_is_latest_version': (current) => `Current is the latest version, current version: ${JSON.stringify(current)}`,
    },
    usage: {
      'usage_not_open': 'The current robot is not open for usage statistics',
      'current_usage': '📊 Current robot usage\n\nTokens:\n',
      'total_usage': (total) => `- Total: ${total || 0} tokens\n- Per chat usage: `,
      'no_usage': '- No usage',
    },
    permission: {
      'not_authorized': 'Identity permission verification failed',
      'not_enough_permission': (roleList, chatRole) => `Insufficient permissions, need ${roleList.join(',')}, current: ${chatRole}`,
      'role_error': (e) => `Identity verification error: ` + e.message,
      'command_error': (e) => `Command execution error: ${e.message}`,
    },
    bill: {
      'bill_detail': (totalAmount, totalUsage, remaining) => `📊 This month usage\n\n\t- Amount: $${totalAmount || 0}\n\t- Usage: $${totalUsage || 0}\n\t- Remaining: $${remaining || 0}`,
    },
  },
};
