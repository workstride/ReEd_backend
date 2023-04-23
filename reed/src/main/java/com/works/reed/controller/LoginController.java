@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User foundUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok("로그인 성공");
    }
}
